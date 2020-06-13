library("plotly")
rawInput <- read.table("20200613-155200.txt",sep = ",")

Flights <- data.frame(rawInput$V5,rawInput$V15,rawInput$V16,rawInput$V12)
colnames(Flights) <- c("Registration","Latitude","Longitude","Altitude")

fig <- plot_ly()
for (i in unique(Flights$Registration)) {
    uniqueFlights <- Flights[Flights$Registration == i,]
    fig<-fig %>% add_trace(
        x = uniqueFlights$Latitude,
        y = uniqueFlights$Longitude,
        z = uniqueFlights$Altitude,
        type = 'scatter3d', 
        mode = 'lines',
        line = list(
            width = 6, 
            color = ~c, 
            colorscale = 'Viridis')
        )
}

fig