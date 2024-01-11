install: check
	R -s -e "devtools::install()"

check: site 
	R -s -e "devtools::check()"

site: document
	cp -r inst/trendchart.js pkgdown/assets/trendchart.js
	R -s -e "pkgdown::build_site()"

document: many
	R -s -e "devtools::document()"

many: packer
	R -s -e "many::bundle()"

packer:
	R -s -e "packer::bundle()"

document_dev: many_dev
	R -s -e "devtools::document()"

many_dev: packer_dev
	R -s -e "many::bundle()"

packer_dev:
	R -s -e "packer::bundle_dev()"

dev: document_dev
	Rscript test.R

articles: 
	R -s -e "pkgdown::build_articles()"
