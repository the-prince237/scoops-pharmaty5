#!/usr/bin/env sh
# abort on errors
set -e

git add .

if git diff-index --quiet HEAD --; 
    then 
        echo WORK TREE VERY VERY CLEAN ":)"

        # push project
        git push -u github HEAD

        # build
        yarn build

        # create and checkout to gh-pages branch
        git checkout --orphan gh-pages

        # navigate into the build output directory, add and commit changes
        git --work-tree dist add --all
        git --work-tree dist commit -m "Deploy"

        # push build 
        git push github HEAD:gh-pages --force

        # remove build folder : dist and gh-pages branch
        rm -r dist
        git checkout -f main
        git branch -D gh-pages

    else echo commiting changes ... 
        echo There are still not commited changes. Use \"git add\" and \"git commit\" or just \"yarn commit\" "for" quick commits
fi

