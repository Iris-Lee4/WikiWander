using Microsoft.AspNetCore.Mvc;
using WikiWander.Repositories;
using WikiWander.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WikiWander.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly IGameRepository _gameRepository;
        public GameController(IGameRepository gameRepository)
        {
            _gameRepository = gameRepository;
        }

        //// GET: api/<GameController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        [HttpGet("GetAllByUserId/{id}")]
        public IActionResult GetAllByUserId(int id)
        {
            var games = _gameRepository.GetAllByUserId(id);
            if (games == null)
            {
                return NotFound();
            }
            return Ok(games);
        }

        // GET api/<GameController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var game = _gameRepository.GetById(id);

            if(game == null)
            {
                return NotFound();
            }

            return Ok(game);
        }

        // POST api/<GameController>
        [HttpPost]
        public IActionResult Post(Game game)
        {
            game.TimeStamp = DateTime.Now;
            _gameRepository.Add(game);
            return CreatedAtAction("Get", new { id = game.Id }, game);
        }

        // PUT api/<GameController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Game game)
        {
            if (id !=  game.Id)
            {
                return BadRequest();
            }

            _gameRepository.Update(game);
            return NoContent();
        }

        // DELETE api/<GameController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _gameRepository.Delete(id);
            return NoContent();
        }
    }
}
