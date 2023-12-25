<script>
    import { onMount } from "svelte";
    import * as Matter from 'matter-js';

    let Engine, Render, Runner, Bodies, Composite;
    let forceDirection = 0.0;
    
    onMount(() => {
        // setting up variables
        let renderWidth = 350;
        let renderHeight = 470;

        Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite

        // creating an engine
        var engine = Engine.create({
            gravity: {
                x: 0,
                y: 1
            }
        });

        // creating renderer
        var render = Render.create({
            element: document.getElementById('matter-container'),
            engine: engine,
            options: {
                width: renderWidth,
                height: renderHeight,
                wireframes: false,
                background: '#E2F5A0'
            },
        });

        // create two boxes
        var box = Bodies.rectangle(80, -1000, 80, 80, {
            render: {
                fillStyle: "transparent",
                strokeStyle: "#3D622D",
                lineWidth: 10
            },
            restitution: 1
        });
        var triangle = Bodies.polygon(200, -1500, 3, 50, {
            render: {
                fillStyle: "transparent",
                strokeStyle: "#3D622D",
                lineWidth: 10
            },
            restitution: 1
        });
        // rectangle (x, y, width, height)
        var ground = Bodies.rectangle(renderWidth/2, renderHeight, 1000, 10, {isStatic: true});
        var leftWall = Bodies.rectangle(-5.5, 0, 10, 1000, {isStatic: true})
        var rightWall = Bodies.rectangle(renderWidth+5.5, 0, 10, 1000, {isStatic: true})

        //mouse constraint!
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            element: render.canvas,
        }); 

        // adding all components to the world
        Composite.add(engine.world, [box, triangle, ground, leftWall, rightWall, mouseConstraint]);

        // run renderer
        Render.run(render)

        //create runner
        var runner = Runner.create();

        // run the engine
        Runner.run(runner, engine);

        // Fun stuff Here ***********************************************
        window.addEventListener('scroll', () => {
            //detect scroll direction
            const scrolled = window.scroll || window.pageYOffset;
            const scrollDirection = scroll > forceDirection ? 1 : -1;

            const bodies = Composite.allBodies(engine.world);
            bodies.forEach(body => {
                Matter.Body.applyForce(body, body.position, { x: 0, y: -scrollDirection * 0.008 })
            });

            forceDirection = scrolled;
        });
    });

</script>

<div id="matter-container" class="ml-5 translate-x-16 -translate-y-5">

</div>
