using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PortfolioBackend.Models;
using PortfolioBackend.Services;

namespace PortfolioBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogController : ControllerBase
    {
        private readonly BlogService _blogService;

        public BlogController(BlogService blogService) =>
            _blogService = blogService;

        [HttpGet]
        public async Task<List<Blog>> Get() =>
            await _blogService.GetAsync();

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Blog>> Get(string id)
        {
            var blog = await _blogService.GetAsync(id);

            if (blog is null)
            {
                return NotFound();
            }

            return blog;
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Post(Blog newBlog)
        {
            await _blogService.CreateAsync(newBlog);

            return CreatedAtAction(nameof(Get), new { id = newBlog.Id }, newBlog);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Blog updatedBlog)
        {
            var blog = await _blogService.GetAsync(id);

            if (blog is null)
            {
                return NotFound();
            }

            updatedBlog.Id = blog.Id;

            await _blogService.UpdateAsync(id, updatedBlog);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var blog = _blogService.GetAsync(id);

            if (blog is null)
            {
                return NotFound();
            }

            await _blogService.RemoveAsync(id);

            return NoContent();
        }

    }
}
