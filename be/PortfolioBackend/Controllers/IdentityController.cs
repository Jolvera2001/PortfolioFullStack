using Microsoft.AspNetCore.Mvc;

namespace PortfolioBackend.Controllers;

public class IdentityController : Controller
{
    private const string TokenSecret = "somethingSecure";
    private static readonly TimeSpan TokenLife = TimeSpan.FromHours(1);

   
}
