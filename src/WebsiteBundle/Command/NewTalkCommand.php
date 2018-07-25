<?php

namespace WebsiteBundle\Command;

use Sculpin\Core\Console\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class NewTalkCommand extends ContainerAwareCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this
            ->setName('content:new:talk')
            ->setDescription('Create a new talk')
            ->addArgument(
                 'title',
                 InputArgument::REQUIRED,
                 'The title of the post'
             );
            // ->addOption(
            //     'filename',
            //     null,
            //     InputOption::VALUE_OPTIONAL,
            //     'The name of the file to generate'
            // )
            // ->addOption(
            //     'force',
            //     'f',
            //     InputOption::VALUE_NONE,
            //     'Overwrite the file if it already exists'
            // )
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $title = $input->getArgument('title');

        $contents = file_get_contents(__DIR__.'/../Resources/stubs/talk.md');

        $contents = str_replace('{{ title }}', $title, $contents);

        file_put_contents(__DIR__.'/../../../source/_talks/' . string($title)->slugify()  .'.md', $contents);
    }
}
