using Microsoft.AspNetCore.Mvc;
using WikiWander.Repositories;
using WikiWander.Models;
using Microsoft.Extensions.Hosting;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WikiWander.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IMessageRepository _messageRepository;
        public MessageController(IMessageRepository messageRepository)
        {
            _messageRepository = messageRepository;
        }
        // GET: api/<MessageController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<MessageController>/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var messages = _messageRepository.GetById(id);
            if (messages == null)
            {
                return NotFound();
            }
            return Ok(messages);
        }

        // POST api/<MessageController>
        [HttpPost]
        public IActionResult Post(Message message)
        {
            message.TimeStamp = DateTime.Now;
            _messageRepository.Add(message);
            return CreatedAtAction("Get", new { id = message.Id }, message);
        }
        // PUT api/<MessageController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, Message message)
        {
            if (id != message.Id)
            {
                return BadRequest();
            }

            _messageRepository.Update(message);
            return NoContent();
        }

        // DELETE api/<MessageController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _messageRepository.Delete(id);
            return NoContent();
        }
    }
}
