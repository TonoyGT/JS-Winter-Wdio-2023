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
 * 
 * To find webElement
 * function: $
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
 */

// Locator strategies:
/**
 * Locators: way to reach/find a webElement in DOM
 * 
 * 1. using id-attribute
 *      id-attribute is always going to be unique for the webpage (in the DOM)
 *      To check if id-value is unique, In chropath -> //*[@id="id-value"]
 * 
 *      const webElement = await $('#idValue');
 * 
 */




