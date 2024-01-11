dependency <- function(){
  htmltools::htmlDependency(
    "trendchart",
    version = utils::packageVersion("trendchart"),
    src = "",
    script = "trendchart.js",
    package = "trendchart"
  )
}

attach_dependency <- function(tag){
  htmltools::attachDependencies(tag, dependency())
}
