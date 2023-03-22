/**
* function: $$
*      to find multiple webElements using a locator
* 
*      returns an array of multiple webElements
* 
*/

// Autosuggestion
/**
 * 1. Analyze if the auto-suggestion data is present as text-value or an-attribute's-value
 * 2. Create a locator to get ALL auto-suggestion-elements
 * 3. use $$-function to get all autosuggestion-elements in an array
 * 4. use loop (for-of)
 *      pick an auto-suggestion-element from array
 *      apply getText() or getAttribute() on auto-suggestion-element (depends on step-1)
 *      if (above-value is equals to what-we-need-to-click) 
 *          click auto-suggestion-element
 *          stop the loop
 */

// Calendar
/**
 * 1. Analyze if the date-value is present as text-value or an-attribute's-value in the dom
 * 2. Create a locator to get ALL date elements from the desired month
 * 3. use $$-function to get all date-Elements in an array
 * 4. use loop (for-of)
 *      pick date-element from array
 *      apply getText() or getAttribute() on date-element (depends on step-1)
 *      if (above-value is equals to the date-we-need-to-click)
 *          click date-element
 *          stop the loop
 *  
 * 
 */