#' Bar
#' 
#' Bar chart.
#' 
#' @inheritParams common
#' 
#' @export
trend_bar <- function(values, ...){
  t(
    "tc-bar",
    values = values,
    ...
  ) 
}
