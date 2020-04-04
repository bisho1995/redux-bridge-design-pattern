# UML

## Class Diagram

data types can be number, string, boolean, className etc
access specifier is 

```+ public```
```- private ```
```# protected```

modifiers can be

```public```
```protected```
```private```
```readonly```

example

----------------------------------
|          MyClass               |
----------------------------------
|   +x: number                   |
|   +y: number                   |
|   #address: string             |
----------------------------------
|   +constructor(x: number): void| 
|   -getDetails(): void          |
----------------------------------

### inheritence

Inheritance is a ***is-a*** type of relationship, that is clild class is a parent class
it is denoted by a solid arrow

------------                      -------------
| Class A  |   ----------------|>  |  Class B  |
------------                       ------------

So here class B extends class A


## inteface



------------------------------------
|		<<interface>>              |
|		InterfaceName              |
------------------------------------
|+methodName(x: number, y: string).|
------------------------------------


Interface is a **has-a** relationship, that is the child class has the behavior of the parent class

----------              ------------
| Inf A  |  - - - - - |> |   Inf B  |
----------              ------------


Inteface relationship is denoted by a dotten arrow

