# Segregating UI from the data layer

What if we come across a use case where the UI looks the same for two different situation but the data layer is different. For example on clicking a button in one situation should hit api ```/1/api``` and in other case should hit ```/3/api``` in that case we need a mechanism which solves this problem.

My solution is to use the bridge design pattern in the data layer so that we have different implementations for an action creator but the overall contract remains the same.

Since this is not a tutorial project I refrain from trying to explain too much, but if you are curious you can check the action creator folder to check the source code and trying to understand.

## Design patterns used

- Bridge design pattern
- Singleton design pattern
