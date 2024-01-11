#' Pie
#' 
#' Pie chart.
#' 
#' @inheritParams common
#' 
#' @export
trend_pie <- function(values, ...){
  t(
    "tc-pie",
    values = values,
    ...
  ) 
}
