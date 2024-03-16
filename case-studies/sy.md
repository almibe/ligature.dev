---
layout: Main.mustache
title: sy.lig - Case Study
---

# *This is a work in progress.*

## sy.lig

This page will walk through how I created the sy.lig Dataset and also go into exploring the Dataset a little.
sy.lig is a Dataset based on information scraped from the concert archive on Sonic Youth's website.
It contains show information including date, location, set list, other bands, and some other minor information.
I've been a fan of Sonic Youth's music since high school.
In fact the idea for this project started when I was trying to remember something about the
one show I saw Sonic Youth perform at shortly after I graduated highschool.
While searching for the information I found that on Sonic Youth's website someone kept an archive so show information [http://www.sonicyouth.com/mustang/cc/].
This archive seemed like an interesting use case for working with Ligature.

### Getting the Raw HTML Files

The first step was to figure out how to get all of the content.
There are a number of way to scrape websites but I decided to first try to get a version from the wayback machine using [https://github.com/hartator/wayback-machine-downloader].
The tool is easy to use and install (I didn't even have Ruby on my machine when I started on this and I was able to get it working without any issues).
To only download relevant pages I used the `-o` argument to the command and used the filter `/mustang\/cc/` to limit what was downloaded to just a specific directory and not the entire site.

```
gem install wayback_machine_downloader
wayback_machine_download http://www.sonicyouth.com -o /mustang\/cc/
```

The files are now in ./website/ in whatever directory you ran this in.

### Reading Data from the Files.

To read the HTML files in I'll be using [jsoup]() which is a Java port of the Python library Beautiful Soup.
Since Ligature is written in Scala and Java libraries can be used from Scala, I'll be using Scala to read the source files, extract the data, and store into a Ligature instance.
I've created a repository for storing code related to experimenting with Ligature at [https://github.com/almibe/ligature-potpourri].
