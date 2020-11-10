# Launch this script when you are in the same folder

bundle exec jekyll build 2>/dev/null

cd ./blog-prod/

# Assuming you have set an upstream branch in blog folder
git add *
git commit -m "Update"
git push origin