function createEmitter(stage, col) {
   
    pc = new PIXI.ParticleContainer();
    pc.setProperties({
        scale: true,
        position: true,
        rotation: true,
        uvs: true,
        alpha: true,
    });
    
    stage.addChild(pc);

  let colour1 = "f8d200";
  let colour2 = "f8d200";
  let colour3 = "f8d200";

  

    var emitter = new PIXI.particles.Emitter(

        // The PIXI.Container to put the emitter in
        // if using blend modes, it's important to put this
        // on top of a bitmap, and not use the root stage Container
        pc,
        // Emitter configuration, edit this to change the look
        // of the emitter
        {
            "lifetime": {
                "min": 0.1,
                "max": 0.2
            },
            "blendMode": "multiply", // add, normal, multiply, screen
            "frequency": 0.002,
            "emitterLifetime": 0,
            "maxParticles": 35,
            "addAtBack": true,
            "pos": {
                "x": 0,
                "y": 0
            },
            "behaviors": [
                {
                    "type": "alpha",
                    "config": {
                        "alpha": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 0.9
                                },
                                {
                                    "time": 1,
                                    "value": 0
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "moveSpeedStatic",
                    "config": {
                        "min": 170,
                        "max": 170
                    }
                },
                {
                    "type": "scale",
                    "config": {
                        "scale": {
                            "list": [
                                {
                                    "time": 0,
                                    "value": 1.0
                                },
                                {
                                    "time": 0.5,
                                    "value": 0.5
                                },
                                {
                                    "time": 1,
                                    "value": 0.0
                                }
                            ]
                        },
                        "minMult": 1
                    }
                },
                {
                    "type": "color",
                    "config": {
                        "color": {
                            "list": [
                                {
                                    "time": 0,
                                "value": colour1
                                },
                                {
                                    "time": 0.6,
                                  "value": colour2
                                },
                                {
                                    "time": 1.0,
                                  "value": colour3
                                }
                            ]
                        }
                    }
                },
                {
                    "type": "rotation",
                    "config": {
                        "accel": 0,
                        "minSpeed": 10,
                        "maxSpeed": 2350,
                        "minStart": 150,
                        "maxStart": 990
                    }
                },
                {
                    "type": "textureRandom",
                    "config": {
                        "textures": [
                            "gfx/star.png",                          
                        ]
                    }
                },
                {
                    "type": "spawnShape",
                    "config": {
                        "type": "torus",
                        "data": {
                            "x": 0,
                            "y": 0,
                            "radius": 10,
                            "innerRadius": 0,
                            "affectRotation": false
                        }
                    }
                }
            ]
        }
    );

    return emitter;
}



///////////////////////////////////////
//
function createParticleEmitter(type, value, x, y, tx, ty) {

  let pEmitter = createEmitter(app.stage);
  pEmitter.emit = true;
  pEmitter.resetPositionTracking();
  pEmitter.updateOwnerPos(x, y);
  pEmitter.startX = x;
  pEmitter.startY = y;
  pEmitter.endX = tx;
  pEmitter.endY = ty;
  pEmitter.timeKeeper = particleTravelTime;
  pEmitter.ballType = type;
  pEmitter.ballValue = value;
  pEmitter.destroyMe = false;

  particleEmitters[particleEmitterIdx] = pEmitter;
  particleEmitterIdx = (particleEmitterIdx + 1)% 3;

}


///////////////////////////////////////
//
function handleDestruction() {
  let i = 0;

  while (i < particleEmitters.length) {
    if (particleEmitters[i] != null && particleEmitters[i].destroyMe==true) {
      particleEmitters[i].destroyMe = false;
      let pe = particleEmitters.splice(i, 1);
      pe.cleanup();
      pe.destroy();
    } else {
      i++;
    }
  }
}

///////////////////////////////////////
//
function updateParticleEmitters(delta) {

  

  for (let i = 0; i < particleEmitters.length; ++i) {

    particleEmitters[i].resetPositionTracking();

    particleEmitters[i].timeKeeper -= delta;

    let x;
    let y;

    if (particleEmitters[i].timeKeeper <= 0.0) {

      if (particleEmitters[i].emit == true) {
        x = particleEmitters[i].endX;
        y = particleEmitters[i].endY;
        particleEmitters[i].emit = false;
        updateBallPrize(particleEmitters[i].ballType, particleEmitters[i].ballValue);
      }

      if (particleEmitters[i].timeKeeper < -5.0) {
        particleEmitters[i].destroyMe = true;
      }
    } else {
      let ratio = particleEmitters[i].timeKeeper / particleTravelTime;
  
      x = (particleEmitters[i].startX * ratio) + (particleEmitters[i].endX * (1.0 - ratio));
      y = (particleEmitters[i].startY * ratio) + (particleEmitters[i].endY * (1.0 - ratio));
    }

    particleEmitters[i].updateOwnerPos(x, y );
    particleEmitters[i].update(delta * 0.001);
  }

  //handleDestruction();

}
