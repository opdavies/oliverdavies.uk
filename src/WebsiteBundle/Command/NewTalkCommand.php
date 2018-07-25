<?php

namespace WebsiteBundle\Command;

use Sculpin\Core\Console\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Generate a new talk from a stub.
 */
class NewTalkCommand extends ContainerAwareCommand
{
    /**
     * {@inheritdoc}
     */
    protected function configure()
    {
        $this->setName('content:new:talk')
            ->setDescription('Create a new talk')
            ->addArgument('title', InputArgument::REQUIRED, 'The title of the post');
    }

    /**
     * {@inheritdoc}
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $title = $input->getArgument('title');

        $filename = string($title)->slugify() . '.php';

        if (file_exists($file = __DIR__ . "/../../../source/_talks/{$filename}")) {
            $output->writeln("<error>{$filename} already exists.</error>");
            exit(1);
        }

        file_put_contents($file, $this->compileTemplate($title));

        $output->writeln("<info>{$filename} was created.</info>");
    }

    /**
     * Load and compile the template with the correct data.
     *
     * @param string $title The title of the talk
     *
     * @return bool|mixed|string
     */
    private function compileTemplate($title)
    {
        $contents = file_get_contents(__DIR__ . '/../Resources/stubs/talk.md');

        return str_replace('{{ title }}', $title, $contents);
    }
}
