#' Style
#' 
#' Style a chart.
#' see [variables](https://github.com/WebLogin/trendchart-elements#css-variables)
#' 
#' @param ... Named arguments
#' 
#' @export
style <- function(...){
  opts <- c(...)
  props <- paste0(names(opts), ":", unname(opts))
  paste0(props, collapse = ";")
}
