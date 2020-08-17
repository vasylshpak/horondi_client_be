const productType = `
type Product {
_id: ID!
category: Category!
subcategory: Category!
name: [Language]!
description: [Language]!
mainMaterial: [Language]!
innerMaterial: [Language]!
strapLengthInCm: Int!
images: PrimaryImage!
colors: [Color]!
pattern: [Language]
patternImages: ImageSet
closure: [Language]!
closureColor: String
basePrice: [Price]!
options: [ProductOptions]!
available: Boolean!
isHotItem: Boolean!
purchasedCount: Int
rate: Float
rateCount: Int
userRates: [UserRate]
comments: [Comment]
}
`;

const productInput = `
input ProductInput {
subcategory: CategoryInput!
name: [LanguageInput]!
description: [LanguageInput]!
mainMaterial: [LanguageInput]!
innerMaterial: [LanguageInput]!
strapLengthInCm: Int!
images: [PrimaryImageInput]!
colors: [ColorInput]!
pattern: [LanguageInput]
patternImages: ImageSetInput
closure: [LanguageInput]!
closureColor: String
basePrice: Int!
available: Boolean!
isHotItem: Boolean
}`;

module.exports = {
  productType,
  productInput,
};
