
AFRAME.registerComponent('orbit', {
    schema: {
        radius: { type: 'number', default: 100 },
        speed: { type: 'number', default: 0.01 },
    },
    init: function() {
        this.currentAngle = 0;
    },
    tick: function (time, deltaTime) {
        var data = this.data;
        var angleDelta = data.speed * deltaTime / 1000; 
        this.currentAngle += angleDelta;

        this.el.object3D.position.x = data.radius * Math.cos(this.currentAngle);
        this.el.object3D.position.y = data.radius * Math.sin(this.currentAngle) * 1; 
        this.el.object3D.position.z = data.radius * Math.sin(this.currentAngle);
    }
});


AFRAME.registerComponent('rotationjs', {
schema: {
velocidad: {type: 'number', default: 0.2}
},
init: function () {
var planetEl = this.el;
var rotationAngle = 0;
var rotationSpeed = this.data.velocidad;  

setInterval(function () {
  rotationAngle += rotationSpeed;  
  planetEl.setAttribute('rotation', '0 ' + rotationAngle + ' 0');
}, 16); 
}
}
);
