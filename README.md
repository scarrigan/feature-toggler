# feature-toggler

Uses the localstorage to save which features are active and which aren't.

Set availableFeatures with the features you support in your app
window.features.availableFeatures = ['myfeature1', 'myfeature2']

List the enabled feature
window.features.enabledFeatures()

Test if feature is enabled
window.features.isEnabled('featureName')

Enable a feature 
window.features.enableFeature('featureName')

Disable a feature
window.features.disableFeature('featureName')

Protect your feature enabled code by
if (window.features.isEnabled('featureName')) {
  // Execute awesome feature protected code
}
