function timer() {
  var current_time = new Date, 
      game_init_time = new Date(t), 
      minutes = current_time.getMinutes() - game_init_time.getMinutes(),
      seconds = current_time.getSeconds() - game_init_time.getSeconds();
  if (seconds < 0) {
    minutes = minutes - 1;
    seconds = seconds + 60; 
  return minutes + ":", seconds 
}
 
function snake() {
  this.w = 15, this.h = 15, this.dx = 1, this.dy = 1, this.xf = 1, this.yf = 1, this.sn = []; 
  for (var t = {x: w / 2, y: h / 2}, e = 0; e < 5; e++) this.sn.push(Object.assign({}, t)), t.x += this.w;
  this.draw = function(){
  }
}
function foodcolor() {
  for (var colorcode = "0123456789ABCDEF", color = "#", i = 0; i < 6; i++){
    color += colorcode[Math.ceil(Math.random() * 15)];
  }
  return color
}
 
function food() {
  this.x = 0, this.y = 0, this.w = 10, this.h = 10, this.color = foodcolor(), this.renew = function() { 
    this.x = Math.floor(Math.random() * (w - 20) + 10), 
    this.y = Math.floor(Math.random() * (w - 20) + 10), 
    this.color = foodcolor(), this.renew(), 
    this.put = (() => {
      canvas_context.fillStyle = this.color, 
      canvas_context.fillRect(this.x, this.y, this.w, this.h)
    })
  }
}

function init() { 
  cc.height = h, cc.width = w, c.fillRect(0, 0, w, innerHeight); 
  for (var t = 0; t < 10; t ++) fa.push(new food); 
  s = new snake(w/2, h/2, 400, 4, 4), anima()
}

function emit(t) {
  key.keydown(t)
}

var t = new Date + "", 
    d = void 0, 
    cc = document.getElementByTagName("canvas")[0], 
    c = cc.getContext("2d"); 
    key = {}, key.keydown = function(t) {
      var e = document.createEvent("KeyboardEvent");
      Object.defineProperty(e, "keyCode", {
        get: function(){
          return this.keyCodeVal
        }
      }), Object.defineProperty(e, "key", {
        get: function() {
          return 37 == this.keyCodeVal ？"ArrowLeft" : 38 == this.keyCodeVal  ? "ArrowUp" : 39 == this.keyCodeVal ? "ArrowRight"：40 == this.keyCodeVal ? "ArrowDown" : "Null"
        }
      }), e.initKeyboardEvent ? e.initKeyboardEvent("keydown", !0, !0, document.defaultView, !1, !1, !1, !1, t, t) : e.initKeyEvent("keydown", !0, !0, document.defaultView, !1, !1, !1, !1, t, 0), e.keyCodeVal = t, e.keyCode !== t && alert("keyCode mismatch " + e.keyCode), document.dispatchEvent(e)};
    var o, s, h = innerHeight, w = innerWidth, fw = 60, fa = []; 
    window.onkeydown = function (t) {
      var e = t.key; 
      (e.search("Arrow") > -1 || "1" == e) && (d = t.key), 
      "i" != e && "I" != e || (console.log("inc"), fw -= 10), 
      "d" != e && "D" != e || (console.log("dec"), fw += 10),     
    }
}
