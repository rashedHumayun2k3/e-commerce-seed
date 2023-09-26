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

namespace Ec.Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class PublisherController : ControllerBase
	{
		readonly IPublisherManager _publisherManager;
		readonly ILogger<PublisherController> _logger;
		public PublisherController(IPublisherManager publisherManager, ILogger<PublisherController> logger)
		{
			_publisherManager = publisherManager;
			_logger = logger;
		}

		[HttpGet]
		[ProducesResponseType(typeof(IEnumerable<CategoryDto>), 200)]
		[ProducesResponseType(404)]
		public async Task<IActionResult> Get()
			=> Ok(await _publisherManager.GetAllPublishers());

		[HttpGet("{id}")]
		[ProducesResponseType(typeof(CategoryDto), 200)]
		[ProducesResponseType(404)]
		public async Task<IActionResult> GetById(int id)
		{
			var result = await _publisherManager.GetSinglePublisherById(id);
			return result == null ? NotFound() : Ok(result);
		}
	}
}
