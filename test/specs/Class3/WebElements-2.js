/**
 * WebElements:
 *      1. InputBox (TextBox)
 *      2. Button
 *      3. Text
 *      4. Image
 *      5. RadioButton
 *      6. CheckBox
 *      7. Dropdown
 *      8. Link (HyperLink)
 * 
 * 
 * Interactions:
 *      1. Type
 *      2. Click
 *      3. is webElement selected
 *      4. is webElement enabled
 *      5. is webElement displayed
 */

/**
 * Document Object Model (DOM)
 * 
 * Code -> Generates a html document (DOM) -> makes the webpage
 * 
 * <html>
 *      <head>
 *          ...
 *          ...
 *      </head>
 *      <body>
 *          ...
 *          ...
 *      </body>
 * </html>
 * 
 * 
 * <tag1>           // starting of tag1
 * 
 * </tag1>          // closing of tag1
 * Note: tagNames CANNOT have spaces
 * 
 * eg: html, body, div, script, input, form, link, a, button
 * 
 * 
 * <tag1 attr1="value1" attr2="value2" attr3 attr4="value four", attr5="5">
 * 
 * tag -> tag1
 * attributes of tag1 -> attr1, attr2, attr3, attr4, attr5
 * Note: attributeNames CANNOT have spaces
 * 
 * value of attr1 = "value1"
 * value of attr2 = "value2"
 * value of attr3 = none
 * value of attr4 = "value four"
 * value of attr5 = "5"
 * 
 * 
 * <input type="text" class="inputtext _55r1 _6luy" name="email" id="email" data-testid="royal_email" 
 *                  placeholder="Email or phone number" autofocus="1" aria-label="Email or phone number">
 * 
 * tag -> input
 * 
 * attributes of input-tag
 *  type = "text"
 *  class = "inputtext _55r1 _6luy"
 *  name = "email"
 *  id = "email"
 *  data-testid = "royal_email"
 *  placeholder = "Email or phone number"
 *  autofocus = "1"
 *  aria-label = "Email or phone number"
 * 
 * 
 * <tag1 attr1="value1" attr2="value2" attr3 attr4="value four", attr5="5">
 *      <tag2 attr11="value11" attr12="value twelve">
 *          "text value"
 *      </tag2>
 *      ...
 *      ...
 *      <tag3 attr21="value21" attr22="value twenty two">
 *          "text value again"
 *      </tag3>
 * </tag1>
 * 
 * text-value of tag2 = "text value"
 * text-value of tag3 = "text value again"
 * text-value of tag1 = none
 * 
 * <button value="1" class="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy" name="login" data-testid="royal_login_button" type="submit" id="u_0_5_zk">
 *      Log In
 * </button>
 * 
 * text-value of button-tag = "Log In"
 */

/**
 * Chropath extension:
 * 
 * https://chrome.google.com/webstore/detail/chropath/ljngjbnaijcbncmcnjfhigebomdlkcjo
 * 
 * helps us to write locators and also helps to verify custom locators
 * 
 * locators: way to find a webElement in an unique way.
 * 
 */

// Steps to find and interact with a webElement
/**
 * 1. Find the unique locator strategy to find webElement in the DOM
 * 2. Based on the locator strategy, use corresponding code to find the webElement
 * 3. once the webElement is found, interact with webElement
 */

// To find webElement
//      function: $

// Functions to interact with webElement:
/**
 * 
 * 
 * 1. type
 *      function: setValue()
 *      input: String-input which is the text that we want to type
 * 2. click
 *      function: click()
 * 3. to find if webElement is enabled
 *      function: isEnabled()
 *      if the webElement is enabled
 *          function returns true
 *      otherwise
 *          function returns false
 * 4. to find if a webElement is selected
 *      function: isSelected()
 *      if the webElement is selected
 *          function returns true
 *      otherwise
 *          function returns false
 * 5. to find if a webElement is displayed
 *      function: isDisplayed()
 *      if the webElement is displayed
 *          function returns true
 *      otherwise
 *          function returns false     
 *      
 */

// Locator strategies:
/**
 * Locators: way to reach/find a webElement in DOM
 * 
 * 1. Using id-attribute
 *      id-attribute is always going to be unique for the webpage (in the DOM)
 *      To check if id-value is unique, In chropath -> //*[@id="id-value"]
 * 
 *      const webElement = await $('#idValue');
 * 
 * 2. Using other attribute's value instead id-attribute
 *      To check if any-attribute has unique value, In chropath -> //tagName[@attrName="attrValue"]
 *      Note: Attribute's value cannot have spaces (If want to use attribute's value with spaces then refer xpath)
 *      
 *      const webElement = await $('tagName[attrName=attrValue]');
 * 
 * 3. Using text-Value
 *      To check if the text-value with webElement is unique, In chropath -> //tagName[text() = 'text value']
 * 
 *      const webElement = await $('tagName=text value');
 * 
 * 4. Using partial attribute's value
 *      To check if the partial attribute's value is unique, In chropath -> //tagName[contains(@attrName, 'partialAttrValue')]
 *      Note: Attribute's partial value cannot have spaces (If want to use attribute's partial value with spaces then refer xpath)
 * 
 *      const webElement = await $('tagName[attrName*=partialAttrValue]');
 * 
 * 5. Using partial text-value
 *      To check if the partial text value is unique, In chropath -> //tagName[contains(text(), 'partial Text Value')]
 * 
 *      const webElement = await $('tagName*=partial text value');
 * 
 * 6. Using link-text
 *      To check if the link text is unique, In chropath -> //a[text()='Link text']
 * 
 *      const webElement = await $('=Link text');
 * 
 * 7. Using partial link-text
 *      To check if the link partial-text is unique, In chropath -> //a[contains(text() , 'partial link text')]
 * 
 *      const webElement = await $('*=partial link text');
 * 
 * 8. Using tagName
 *      To check if the tagName with webElement is unique, In chropath -> //tagName
 * 
 *      const webElement = await $('<tagName>')
 * 
 */

// Link
/**
 *      always have a-tag
 *      text of a link is called Link-Text
 *      after clicking the link, user should land on which webPage that is defined in href-attribute.
 * 
 * 
 * 
 * <a href="https://messenger.com/" title="Check out Messenger.">
 *  Messenger
 * </a>
 * Text of a-tag = Messenger
 * 
 */

