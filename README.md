# feature-toggler

Uses the localstorage to save which features are active and which aren't.

<strong>Set availableFeatures with the features you support in the start of your app</strong><br>
window.features.availableFeatures = ['myfeature1', 'myfeature2']

<h3>API</h3>
<strong>List the enabled features</strong> : window.features.enabledFeatures()

<strong>Test if feature is enabled</strong> : window.features.isEnabled('featureName')

<strong>Enable a feature</strong> : window.features.enableFeature('featureName')

<strong>Disable a feature</strong> : window.features.disableFeature('featureName')

<strong>Protect your feature enabled code by</strong><br>
if (window.features.isEnabled('featureName')) {
  // Execute awesome feature protected code
}
