<script>
    import { onMount } from "svelte";
    import * as Matter from 'matter-js';

    let Engine, Render, Runner, Bodies, Composite;
    
    onMount(() => {
        const container = document.getElementById('matter-container');

        // setting up variables
        let renderWidth = container.clientWidth;
        let renderHeight = container.clientHeight;

        Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Bodies = Matter.Bodies,
        Composite = Matter.Composite

        // creating an engine
        var engine = Engine.create({
            gravity: {
                x: 0,
                y: 0.5
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
                background: '#FAC9C2'
            },
        });

        // create two boxes
        var box = Bodies.rectangle(80, -100, 80, 80, {
            render: {
                fillStyle: "transparent",
                strokeStyle: "#6A0510",
                lineWidth: 10
            },
            restitution: 1
        });
        var triangle = Bodies.polygon(200, -250, 3, 50, {
            render: {
                fillStyle: "transparent",
                strokeStyle: "#6A0510",
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

    });

</script>

<div id="matter-container" class="w-2/4 h-screen">

</div>
