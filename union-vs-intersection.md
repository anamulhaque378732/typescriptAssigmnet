Union and Intersection Types in TypeScript

TypeScript gives us two useful features called union and Intersection types. Both are help developers to create fexible and reuseable types. Union types, its allows a variable to accept multiple possible type. One the other hand Intersection types combile multiple types into one.

Describe union types.

Union types, it allows a variable to hold any one several possible types. (|) this symbol define union types.

Example

type PhoneNumber = string | number

const mobileNumber: PhoneNumber = 014545;
const phoneNumber : PhoneNumber ="+880154"

Both string or number are valid for the PhoneNumber type.

Another Example

type Identity = string | number

const men = ( id:Identity ) => {
if (typeof id ==="string") {
return "This are passport number"
} else {
return "This are nid number"
}

}

Describe Intersection

Intersection type combine multiple types into one.(&) this symbol define intersection.

type Parents ={
name:string
}

type Mother ={
role:"Mother"
}

type Father ={
role:"Father"
}

type userAccount = Parents &(Mother | Father)

Finaly, Union and intersection types make Typescript more easy and powerful. Union is useful when a value can have defferent types. on the other hand Intersection is useful we need combine multiple value. when you understand both . then you can write reuseable and maintainble code.
