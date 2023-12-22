<script>
    
</script>

<div id="matter-container">
    <!-- Render the physics elements here -->
    {#if engine}
        {#each engine.world.bodies as body}
            {#if body.render.visible}
                <div
                        class="matter-shape"
                        style="width: {body.bounds.max.x - body.bounds.min.x}px;
                 height: {body.bounds.max.y - body.bounds.min.y}px;
                 position: absolute;
                 top: {body.position.y}px;
                 left: {body.position.x}px;
                 transform: rotate({body.angle}rad);"
                ></div>
            {/if}
        {/each}
    {/if}
</div>

