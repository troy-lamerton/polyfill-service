Object.defineProperty=function(object,property,descriptor){var propertyValue=object[property];function onPropertyChange(event){if(event.propertyName==property){object.detachEvent("onpropertychange",onPropertyChange);if(descriptor.set){propertyValue=descriptor.set.call(object,object[property])}object[property]=new String(propertyValue);object[property].toString=function(){return descriptor.get.call(object)};object.attachEvent("onpropertychange",onPropertyChange)}}object[property]=new String(propertyValue);object[property].toString=function(){return descriptor.get.call(object)};object.attachEvent("onpropertychange",onPropertyChange)};