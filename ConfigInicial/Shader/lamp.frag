#version 330 core
out vec4 FragColor;

in vec3 FragPos;
in vec3 Normal;
in vec2 TexCoords;

uniform vec3 lampColor;
uniform sampler2D texture_diffuse1;

void main()
{
    // Usar textura si está disponible, sino usar color sólido
    vec4 texColor = texture(texture_diffuse1, TexCoords);
    if(texColor.a < 0.1)
        FragColor = vec4(lampColor, 1.0);
    else
        FragColor = texColor * vec4(lampColor, 1.0);
}