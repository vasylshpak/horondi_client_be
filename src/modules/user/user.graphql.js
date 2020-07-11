const userType = `
type User{
    _id:ID!
    firstName: String
    lastName: String
    password: String
    role: RoleEnum
    email: String!
    phoneNumber: String
    address: Address
    images: ImageSet
    token: String
    credentials: [Credential]
      registrationDate: String
      wishlist: [ID]
      cart: [ID]
      orders:[ID]
      purchasedProducts: [ID]

}`;

const userInput = `
input UserInput {
    firstName: String
    lastName: String
    password: String
    role: String
    email: String
    phoneNumber: String
    address: AddressInput
    images: ImageSetInput
    credentials: [CredentialInput]
    registrationDate: String
    wishlist: [ID]
    cart: [ID]
    orders:[ID]
    purchasedProducts: [ID]
}`;

module.exports = { userType, userInput };
