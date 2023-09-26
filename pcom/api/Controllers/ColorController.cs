using Ec.Api.Exceptions;
using Ec.Api.Models;
using Ec.Business.Dto.Response;
using Ec.Business.Managers;
using Ec.Business.Managers.Implementations;
using Ec.Data.Entities;
using Ec.Data.Repositories;
using Ec.Worker.Jobs;
using Hangfire;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Data.SqlClient;
using System.Net;

namespace Ec.Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ColorController : ControllerBase
	{
		readonly IColorManager _colorManager;
		readonly ILogger<ColorController> _logger;


        public ColorController(IColorManager colorManager, ILogger<ColorController> logger)
		{
            _colorManager = colorManager;
			_logger = logger;
		}

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<ColorDto>), 200)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> Get()
		{
            return Ok(await _colorManager.GetAllColors());
        }


        

		
	}
}
