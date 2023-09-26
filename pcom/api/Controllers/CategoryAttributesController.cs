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
	public class CategoryAttributesController : ControllerBase
	{
		readonly ICategoryAttributesManager _categoryAttributesManager;
		readonly ILogger<CategoryAttributesController> _logger;
		public CategoryAttributesController(ICategoryAttributesManager categoryAttributesManager, ILogger<CategoryAttributesController> logger)
		{
			_categoryAttributesManager = categoryAttributesManager;
			_logger = logger;
		}

		[HttpGet]
		[ProducesResponseType(typeof(IEnumerable<CategoryDto>), 200)]
		[ProducesResponseType(404)]
		public async Task<IActionResult> Get()
		{
			return Ok(await _categoryAttributesManager.GetAllCategoryAttributes());
		}

		[HttpGet("{categoryId}/attributes")]
		[ProducesResponseType(typeof(IEnumerable<CategoryDto>), 200)]
		[ProducesResponseType(404)]
		public async Task<IActionResult> Get(int categoryId)
		{
			return Ok(await _categoryAttributesManager.GetAllCategoryAttributesByCategoryId(categoryId));
		}
	}
}
