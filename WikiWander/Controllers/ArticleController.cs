using Microsoft.AspNetCore.Mvc;
using WikiWander.Repositories;
using WikiWander.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WikiWander.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IArticleRepository _articleRepository;
        public ArticleController(IArticleRepository articleRepository)
        {
            _articleRepository = articleRepository;
        }

        // GET: api/<ArticleController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_articleRepository.GetAll());
        }

        // GET api/<ArticleController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var article = _articleRepository.GetById(id);

            if (article == null)
            {
                return NotFound();
            }

            return Ok(article);
        }

        //// POST api/<ArticleController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<ArticleController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<ArticleController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
