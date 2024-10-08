<!-- # Super variables for React -->

# [Super variables for React](https://awstudio.pro/dev/react-super-variables)

[![Boosty](./assets/boosty.svg)](https://boosty.to/awstudio)
[![GitHub license](./assets/license-mit.svg)](https://github.com/AWStudio-Joonk/react-super-variables/blob/main/LICENSE.md)
[![npm](./assets/npm.svg)](https://www.npmjs.com/package/react-super-variables)

**Regular Variables** are variables with built-in validation.\
**Dynamic variables (Hooks)** - variables with built-in validation implemented through **React Hooks**

The syntax used for the designation is similar to **TypeScript**

>[!NOTE]
You can maintain the stability of package development through [Boosty](https://boosty.to/awstudio).

- [Super variables for React](#super-variables-for-react)
  - [Types](#types)
    - [TSuperNumber](#tsupernumber)
    - [TSuperString](#tsuperstring)
    - [TSuperVector2D](#tsupervector2d)
    - [TSuperVector3D](#tsupervector3d)
  - [Interfaces](#interfaces)
    - [ISuperVector2D](#isupervector2d)
  - [Regular Variables](#regular-variables)
    - [SuperNumber](#supernumber)
    - [SuperString](#superstring)
    - [SuperVector2D](#supervector2d)
    - [SuperVector3D](#supervector3d)
  - [Dynamic variables (Hooks)](#dynamic-variables-hooks)
    - [useNumber](#usenumber)
    - [useString](#usestring)
    - [useSelect](#useselect)
    - [useSwith](#useswith)
    - [useVector2D](#usevector2d)
    - [useVector3D](#usevector3d)
    - [useObject\<T\>](#useobjectt)
  - [Support on the Boosty](#support-on-the-boosty)

## Types

Indicate which data type is used in this part of the code.

### TSuperNumber

Represents an object for `number`.

`value` - the value of the set variable \
`set` - the method for set the value

```TSX
type TSuperNumber = { 
  value: number | null
  set: ( value: number | null ) => boolean
}
```

### TSuperString

Represents an object for `string`.

`value` - the **value** of the set variable \
`set` - the **method** for set the value

```TSX
type TSuperString = { 
  value: string
  set: ( value: string | null ) => boolean
}
```

### TSuperVector2D

Represents an object for a vector in 2D.

```TSX
type TSuperVector2D = { 
  value: {x: number, y: number}
  set: ({x: number, y: number} | null) => boolean
}
```

### TSuperVector3D

Represents an object for a vector in 3D.

```TSX
type TSuperVector3D = { 
  value: {x: number, y: number, z: number }
  set: ({
    x?: number, 
    y?: number, 
    z?: number 
  } | null) =>  boolean
}
```

## Interfaces

The main purpose of interfaces is to provide a single input and output of data types for different implementation methods.

### ISuperVector2D

```TSX
interface ISuperVector2D{
  (value?: {x: number, y: number}, 
  options?: {
    min?: {x: number, y: number} | number,
    max?: {x: number, y: number} | number,
    step?: {x: number, y: number} | number,
    decimal?: {x: number, y: number} | number
  }) : TSuperVector2D;
}
```

## Regular Variables

Regular variables with auto-validation

### SuperNumber

Variables have their own built-in validation.

If the new value is larger than the old one, the rounding goes up and around.
when declaring a variable, it is assumed that the previous value was zero.\
The value not set is `zero`

```TSX
interface SuperNumber{
  (value?: number, options?: {
    min?: number,
    max?: number,
    step?: number,
    decimal?: number,
  }) : TSuperNumber;
}
```

Example

```TSX
import { SuperNumber } from 'react-super-variables';

let num = SuperNumber(0.7, {
  min: 0,
  max: 100,
  step: 0.5, 
  decimal: 2
});

// return 1.00
```

### SuperString

```TSX
interface SuperString{
  (value?: string, options?: {
    min?: number,
    max?: number,
    mask?: string
  }) : TSuperString;
}
```

Example

```TSX
import { SuperString } from 'react-super-variables';

let name = SuperString('Mark', {
  min: 1,
  max: 20,
  mask: '[A-z]', 
});

```

### SuperVector2D

The method implements the interface [SuperVector2D](#isupervector2d).

```TSX
SuperVector2D<ISuperVector2D>();
```

Exemple

```TSX
import { SuperVector2D } from "react-super-variables";

let position = SuperVector2D();
```

### SuperVector3D

```TSX
interface SuperVector3D{
  (value?: {x: number, y: number, z: number}, 
  options?: {
    min?: {x: number, y: number, z: number} | number,
    max?: {x: number, y: number, z: number} | number,
    step?: {x: number, y: number, z: number} | number,
    decimal?: {x: number, y: number, z: number} | number
  }) : TSuperVector3D;
}
```

## Dynamic variables (Hooks)

Variables have their own built-in validation. Implemented via `React Hooks'.

If the new value is larger than the old one, the rounding goes up and around.
when declaring a variable, it is assumed that the previous value was zero.\
The value not set is `zero`

### useNumber

```TSX
useNumber<ISuperNumber>()
```

Exemple

```TSX
import { useNumber } from 'react-super-variables';

let num = useNumber(0.7)
console.log(num.value)
```

### useString

```TSX
useString<ISuperString>()
```

Exemple

```TSX
import { useString } from 'react-super-variables';

let name = useString('Mark')
console.log(name.value)
```

### useSelect

```TSX
useNumber<ISuperNumber>()
```

### useSwith

```TSX
useNumber<ISuperNumber>()
```

### useVector2D

```TSX
useVector2D<ISuperVector2D>()
```

Exemple

```TSX
import { useVector2D } from 'react-super-variables';

let position = useVector2D()
console.log(position.value)
```

### useVector3D

```TSX
useVector3D<ISuperVector3D>()
```

```TSX
useVector3D< ISuperVector3D >()
```

```TSX
useVector3D <ISuperVector3D>()
```

```TSX
useVector3D < ISuperVector3D >()
```

Simple Example:

```TSX
import { useVector3D } from 'react-super-variables';

let position = useVector3D()
```

### useObject\<T\>

Dynamic object

```TSX
useObject<ISuperObject>()
```

Simple Example:

```TSX
import { useObject } from 'react-super-variables';

let user = useObject<{
  name:string,
  age: number
}>()
console.log(position.value)
```

## [Support on the Boosty](https://boosty.to/awstudio/donate)

[![npm](./assets/awstudio-donate.png)](https://boosty.to/awstudio/donate)
