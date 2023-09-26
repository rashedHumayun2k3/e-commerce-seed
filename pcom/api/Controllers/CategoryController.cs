using Ec.Api.Exceptions;
using Ec.Api.Models;
using Ec.Business.Dto.Response;
using Ec.Business.Managers;
using Ec.Data.Entities;
using Ec.Worker.Jobs;
using Hangfire;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Data.SqlClient;
using System.Net;
using System.Text.Json.Nodes;

namespace Ec.Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CategoryController : ControllerBase
	{
		readonly ICategoryManager _categoryManager;
		readonly ILogger<CategoryController> _logger;
		readonly INotificationJob _notificationJob;
		public CategoryController (ICategoryManager categoryManager, ILogger<CategoryController> logger, INotificationJob notificationJob)
		{
            _categoryManager = categoryManager;
			_logger = logger;
			_notificationJob = notificationJob;
		}


		[HttpGet]
		[ProducesResponseType(typeof(IEnumerable<CategoryDto>), 200)]
		[ProducesResponseType(404)]
		public async Task<IActionResult> Get()
		{
			return Ok(await _categoryManager.GetAllCategories());
		}

        [HttpPost("RoutingParameter")]
        [ProducesResponseType(typeof(IEnumerable<CategoryDto>), 200)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> RoutingParameter([FromBody] RouteParamsModel routingParameter)
        {
			
            return Ok(await _categoryManager.GetAllCategories());
        }
    }
}
