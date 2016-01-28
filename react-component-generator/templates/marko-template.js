<require module="path" var="path" />
<require module="<%=pathResolverString%>" var="renderer" />
<div id="<%= filename %>">
  <if test="data.isServer === 'true'">
    $!{renderer.serverRenderer('<%= filename %>')}
  </if>
</div>
