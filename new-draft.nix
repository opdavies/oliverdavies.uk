{ pkgs }:

pkgs.writeShellApplication {
  name = "new-draft";

  runtimeInputs = with pkgs; [ coreutils git ];

  text = ''
    title="$1"

    exclude_words="for|at|and"

    filtered_title=$(echo "$title" | sed -E "s/\b($exclude_words)\b//g")

    slug=$(echo "$filtered_title" | tr '[:upper:]' '[:lower:]' | sed -e 's/[^a-z0-9]/-/g' -e 's/-\+/-/g' -e 's/^-//g' -e 's/-$//g')

    file="source/_posts/$slug.md"

    echo -e "---\ntitle: $title\ndate: ~\ndraft: true\n---" > "$file"

    echo "File created: $file"

    git add "$file"
    git commit -s -m "Add draft: $title"
  '';
}
