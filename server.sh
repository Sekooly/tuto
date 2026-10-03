rm -rf _site
bundle exec jekyll clean
bundle exec jekyll build
bundle exec jekyll serve --i --livereload --trace --watch --H 0.0.0.0 -P 7000