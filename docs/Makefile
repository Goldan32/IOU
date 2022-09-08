SHELL=/bin/bash
TEMPLATE_DIR := template
TEMPLATE_FILENAME := $(TEMPLATE_DIR)/eisvogel.latex
TEMPLATE_NAME := ./$(TEMPLATE_DIR)/eisvogel
TMP := tmp
TEMPLATE_LINK := "https://github.com/Wandmalfarbe/pandoc-latex-template/releases/download/v2.0.0/Eisvogel-2.0.0.tar.gz"
MD_NAME := specification.md
PDF_NAME := IOU-specification.pdf
ZIP_NAME := IOU-specification.zip

RM := rm -rf
PANDOC := pandoc

REPLACE_DATE := sed s/INSERT_DATE_HERE/"$$(LC_ALL=en_US.utf8 date "+%B %d, %Y")"/ $(MD_NAME)

.PHONY: all clean pkg

.ONESHELL:

all: pdf pkg

pkg: $(ZIP_NAME)

$(ZIP_NAME): $(PDF_NAME)
	zip $@ $<

pdf: $(PDF_NAME)

$(TEMPLATE_DIR):
	@mkdir -p $@

$(TEMPLATE_FILENAME): | $(TEMPLATE_DIR)
	@mkdir $(TMP) && cd $(TMP)
	@wget $(TEMPLATE_LINK)
	@tar xzf $$(basename $(TEMPLATE_LINK))
	@mv $$(basename $(TEMPLATE_FILENAME)) ../$(TEMPLATE_FILENAME)
	@cd .. && $(RM) $(TMP)


$(PDF_NAME): $(MD_NAME) | $(TEMPLATE_FILENAME)
	$(REPLACE_DATE) | $(PANDOC) -t pdf -f markdown --template $(TEMPLATE_NAME) -o $@

clean:
	$(RM) $(PDF_NAME) $(ZIP_NAME) $(TEMPLATE_DIR)

