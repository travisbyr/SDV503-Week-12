# SDV503-Week-12

## Hash Tables & Dictionaries

Hash tables and dictionaries are two forms of data structure stores, that send and recieve data differently to each other. Both have a unquie way of storing data that has its own advantages and disadvantages.

## Hash Tables

Hash tables are a data structure that pairs keys to values. This is a process that takes key values and converts them into key indexes, that can be used to reference locations of values. Every key index is unique and is assigned to every item in a data sheet. Hash tables are the fundamentals that associative arrays use to assign keys to values. A hash table is able to effectivly create key indexes by using a hash function. The advantange of using hash tables is this it has a computational complexity of 0(1) (constant time). This means that the more datat that is required to be processed through the hash function, takes the same amount of computational effortand time. This makes hash functions quite efficent, especially when a very large dataset is present, as the complexity will remain the same.

![Image of Code](https://github.com/travisbyr/SDV503-Week-12/blob/master/hashTableDia.png)

### Hash Function

A hash function, is a function that converts keys into indexes then assigns the key to a value, creating a key value pair. The key can then be used to to reference the values location in an array. As shown above, the key values are processed through a hash function and are converted into a index number that is then assigned to the key value. When the key value is converted, it becomes an index value, the value being given randomly between a range of values, that depends on the amount of buckets that the hash function is given. It is possible that a key value could be hashed to an index value that is occupied. If this occurs, this means that their has been a 'collision' and resulting in the hash function looking for another key index location for the key value to hash to. This process is called 'collision resolution' and uses either 'separate chaining' or 'probing' to find an avaliable location for the key value to hash to.

![Image of Code](https://github.com/travisbyr/SDV503-Week-12/blob/master/hashTableCode.png)

![Image of Code](https://github.com/travisbyr/SDV503-Week-12/blob/master/hashTablePseu.png)

The above code and pseudocode explains how a hash table is used in javascript. As you can see near the bottom, a key index is used to find the location of a value. Although, this example does not show you how the key value is being hashed, it does give you an understanding on how hash tables work to retrieve data.

## Dictionaries

Dictionaries are another data structure store that retrieves, sends and stores data. This data structure is used by javascript objects to effectivly manage data. Dictionaries contain 'items' which are made up of key value pairs. The value holds the data and the key is the value that represents the data. The index value is not like hash functions, and does not have to be numerical, it can be anything you want. Dictionaries are mostly used for objects, as a way as storing data. An advantage of dictionaries is that the values can be labeled in a way that is relateable to the data. This makes retrieving data efficent and easy, as it is easier to understand (explained more in depth below).

![Image of Code](https://github.com/travisbyr/SDV503-Week-12/blob/master/dictionaryDia.png)

An example of dictionaries is when used with objects for databases. The Person object, shows the details of a person. The variable names (firstname, lastName etc) are items keys, where as the data is the value, both which make a key value pair. As objects use this data structure, I am able to show the family of this person by having the value of the key value pair represent 'list' which is the list of family members for this person.By using a key value pair for this element of the object, I am able to located and utilise information of this person, which is very useful for website databases.

An example of this can be shown in code and pseudocode below.

![Image of Code](https://github.com/travisbyr/SDV503-Week-12/blob/master/dictionaryCode.png)
![Image of Code](https://github.com/travisbyr/SDV503-Week-12/blob/master/dictionaryPseu.png)

## References

https://medium.com/javascript-in-plain-english/algorithm-in-javascript-hash-table-7b0464d2b81b
https://pietschsoft.com/post/2015/09/05/javascript-basics-how-to-create-a-dictionary-with-keyvalue-pairs
https://www.freecodecamp.org/news/how-to-implement-a-simple-hash-table-in-javascript-cb3b9c1f2997/
https://www.poftut.com/how-create-and-use-dictionary-in-javascript-tutorial-with-examples/

Open4Tech. (n.d.). _Array vs. Linked List vs. Hash Table._
https://open4tech.com/array-vs-linked-list-vs-hash-table/
dwadwadwadwadwadwa
dwadw