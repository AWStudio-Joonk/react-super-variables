# Super variables for React

The **TypeScript** syntax is used for the designation.

<br />

Navigation:

- [Super variables for React](#super-variables-for-react)
  - [Types](#types)
    - [TSuperNumber](#tsupernumber)
    - [TSuperString](#tsuperstring)
    - [TSuperVector2D](#tsupervector2d)
    - [TSuperVector3D](#tsupervector3d)
  - [Regular Variables](#regular-variables)
    - [SuperNumber](#supernumber)
    - [SuperString](#superstring)
    - [SuperVector2D](#supervector2d)
  - [Dynamic variables (Hooks)](#dynamic-variables-hooks)
    - [useNumber](#usenumber)
    - [useVector2D](#usevector2d)
    - [useVector3D](#usevector3d)
    - [useObject\<T\>](#useobjectt)

## Types

Implementation of popular data types.

### TSuperNumber

Represents an object for `number` where:

`value` - the value of the set variable \
`set` - the method for set the value

<br/>

> type TSuperNumber = {
    > value: number,
    > set: ( value: number )
    > => void
> }

### TSuperString

Represents an object for `string`.\
<br>
`value` - the **value** of the set variable \
`set` - the **method** for set the value

<br>

> type TSuperString = {
    > value: string,
    > set: ( value: string )
    > => void
> }

### TSuperVector2D

Represents an object for a vector in 2D.

> type TSuperVector2D = { x: number, y: number }

### TSuperVector3D

Represents an object for a vector in 3D.
> type TSuperVector3D = { x: number, y: number, z: number }

## Regular Variables

Regular variables with auto-validation

### SuperNumber

> <FUNCTION>SuperNumber</FUNCTION> ( value: number; options? {\
> &emsp; <VARIABLE>min</VARIABLE>?: <TYPE>number</TYPE>;\
> &emsp; <VARIABLE>max</VARIABLE>? : <TYPE>number</TYPE>;\
> &emsp; <VARIABLE>step</VARIABLE>? : <TYPE>number</TYPE>;\
> &emsp; <VARIABLE>decimal</VARIABLE>?: <TYPE>number</TYPE>;\
> } ) => [TSuperNumber](#tsupernumber)
<<<<<<< HEAD
=======
>
> 

```jsx

let SuperNumber = ()=>{}
let SuperNumber = (value: string)=>{}

SuperNumber = ( value: string, options?: {
  min?: number;
  max?: number;
  step?: number;
  decimal?: number;
})=>{}

type GreetFunction = (a: string) => void;
```
>>>>>>> 067cbc4 (3)

### SuperString

> <FUNCTION>SuperString</FUNCTION> ( <VARIABLE>value</VARIABLE>: <TYPE>string</TYPE>; <VARIABLE>options</VARIABLE>? {\
> &emsp; <VARIABLE>min</VARIABLE>?: <TYPE>number</TYPE>;\
> &emsp; <VARIABLE>max</VARIABLE>?: <TYPE>number</TYPE>;\
> &emsp; <VARIABLE>step</VARIABLE>?: <TYPE>number</TYPE>;\
> &emsp; <VARIABLE>decimal</VARIABLE>?: <TYPE>number</TYPE>\
> } ) => [TSuperNumber](#tsupernumber)

### SuperVector2D

> SuperVector2D (value: Vector2D)

## Dynamic variables (Hooks)

### useNumber

> useNumber (value: number)

### useVector2D

> useVector2D (value: Vector2D)

### useVector3D

> type
>

### useObject\<T\>

Dynamic object

> type
>

<link rel="stylesheet" href="./style.css">
