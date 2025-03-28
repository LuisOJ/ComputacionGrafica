#version 330 core
out vec4 FragColor;
  
uniform vec3 lampColor;  // Nuevo uniforme para el color


void main()
{
     FragColor = vec4(lampColor, 1.0f);
}