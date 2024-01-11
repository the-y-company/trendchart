#' Line
#' 
#' Line chart.
#' 
#' @inheritParams common
#' 
#' @export
trend_line <- function(
  values,
  ...
){
  t(
    "tc-line",
    values = values,
    ...
  ) 
}
