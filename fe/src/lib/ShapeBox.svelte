<script>
    import { onMount } from "svelte";
    import * as Matter from 'matter-js';

    let Engine, Render, Runner, Bodies, Composite;
    
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
        var engine = Engine.create();

        // creating renderer
        var render = Render.create({
            element: document.getElementById('matter-container'),
            engine: engine,
            options: {
                width: renderWidth,
                height: renderHeight,
                wireframes: true,
                background: '#3D622D'
            },
        });

        // create two boxes
        var boxA = Bodies.rectangle(80, -400, 80, 80, {
            render: {
                fillStyle: "transparent",
                strokeStyle: "#3D622D",
                lineWidth: 5
            }
        });
        var boxB = Bodies.rectangle(120, -500, 80, 80);
        var ground = Bodies.rectangle(renderWidth/2, renderHeight+5, 350, 10, {isStatic: true});

        // adding all components to the world
        Composite.add(engine.world, [boxA, boxB, ground]);

        // run renderer
        Render.run(render)

        //create runner
        var runner = Runner.create();

        // run the engine
        Runner.run(runner, engine);
    })
</script>

<div id="matter-container" class="ml-5 translate-x-16 -translate-y-5 rounded-full overflow-hidden">

</div>
