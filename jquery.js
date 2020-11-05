function Jquery(selector){
  if(typeof selector !== "string"){
  	console.log("Error: Selector is not a string");
  	return;
  }
  var element;
  var className = ((selector).startsWith(".", 0))?(selector).split(".")[1]:undefined;
  var idName = ((selector).startsWith("#", 0))?(selector).split("#")[1]:undefined;
  selector  = (idName !== undefined)?idName:(className !== undefined)?className:selector;
  if(className !== undefined){
    element = document.getElementsByClassName(selector);
  }else if(idName !== undefined){
    element = document.getElementById(selector);    
  }else {
  	element = document.getElementsByTagName(selector);
  }
  if(typeof element !== "object"){
  	console.log(undefined);
  	return;
  }
  this.element = element;
};
Jquery.prototype = {
	constructor : Jquery,
	addClass : function(className){
		this.element.classList.add(className);
	},
	removeClass: function(className){
		this.element.classList.remove(className);
	},
	html: function(content=""){
		if(content === ""){
			return this.element.innerHTML;
		}else{
			this.element.innerHTML = content;
		}
	},
	css: function(prop,propvalue){
		this.element.style[prop] = propvalue;
	},
	prop: function(prop,propvalue){
		this.element.style[prop] = propvalue;
	},
	test: function(){
		return "test";
	}
}
var $ = jQuery = function(selector){ return new Jquery(selector)};

