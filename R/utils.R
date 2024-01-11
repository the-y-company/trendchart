t <- function(name, ...){ # nolint
  opts <- list(...)

  opts$values <- encode(opts$values)

  if(length(opts$labels) > 0)
    opts$labels <- encode(opts$labels)

  htmltools::tag(
    name,
    opts
  ) |>
    attach_dependency()
}

encode <- function(values) {
  values |>
    jsonlite::toJSON() |>
    as.character()
}
