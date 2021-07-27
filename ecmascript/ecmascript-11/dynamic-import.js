// While using webpack for module bundling, you may have used dynamic imports. With JavaScript ES11, you get native support for this feature.

import('/dynamic-import-example.js')
  .then(Alert => {
      Alert.show();
  })