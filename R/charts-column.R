#' Column
#' 
#' Column chart.
#' 
#' @inheritParams common
#' 
#' @export
trend_column <- function(values, ...){
  t(
    "tc-column",
    values = values,
    ...
  ) 
}
