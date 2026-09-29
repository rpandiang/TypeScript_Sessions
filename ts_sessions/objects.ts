
// Objects - 9/27
const user : { id: number, name: string, isActive: boolean } = {
    id: 101,
    name: "John Doe",
    isActive: true,
};

//type alias
type User = {
    id: number;
    name: string;
    isActive: boolean;
};

const user2: User = {
    id: 102,
    name: "John Doe",
    isActive: false,
};

//Interface - optional properties
interface IUser {
    id: number;
    name: string;
    isActive?: boolean; //this property is optional
}

const user3: IUser = {
    id: 103,
    name: "Mike Doe",
    isActive: true,
};

//readonly Properties
interface IReadonlyUser {
    readonly id: number; // This property cannot be modified after initialization
    name: string;
    isActive: boolean;
}

const user4: IReadonlyUser = {
    id: 104,
    name: "Alice Doe",
    isActive: true,
};

// Attempting to modify the readonly property will result in a compile-time error
// user4.id = 105; // Error: Cannot assign to 'id' because it is a read-only property.