function CheckGroup(renderTo, options, isMultiple) {
    var that = this;
    that.renderTo = renderTo;
    that.options = options;
    that.isMultiple = !!isMultiple;
    that.initHtml();
    that.initEvent();
}
CheckGroup.prototype.initHtml = fInitHtml;
CheckGroup.prototype.initEvent = fInitEvent;
CheckGroup.prototype.toggleEl = fToggleEl;
CheckGroup.prototype.isSelected = fIsSelected;
CheckGroup.prototype.val = fVal;

function fInitHtml() {
    var that = this;
    // 请补全代码，拼接html字符串
    var sHtml = '';
    if (that.isMultiple) {
        sHtml += '<div class="checkgroup radius"></div>'
    } else {
        sHtml += '<div class="checkgroup"></div>'
    }
    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        sHtml = sHtml + '<div data-val=' + option.val + 'class="item">' + options.text + '</div>';
    }
    sHtml += ' </div>';
    that.renderTo.innerHTML = sHtml;
    // 请补全代码，获取checkgroup的dom元素引用
    that.el = that.renderTo.getElementsByClassName('checkgroup')[0];
}

function fInitEvent() {
    var that = this;
    that.el && that.el.addEventListener('click', function (event) {
        var item = event.target;
        item.classList.contains('item') && that.toggleEl(item);
    });
}

function fToggleEl(item) {
    // 根据当前是单选还是多选，以及当前元素是否选中，高亮/取消���亮指定的选项dom元素
    var that = this;
    if (that.isSelected(item)) {
        item.classList.remove('selected');
    } else if (that.isMultiple) {
        item.classList.add('selected');
    } else {
        that.renderTo.children.forEach(element => {
            if (element.classList.contains('selected')) {
                element.classList.remove('selected');
            }
        });
        item.classList.add('selected');
    }
}

function fIsSelected(item) {
    return item.classList.contains('selected');
}

function fVal(values) {
    var that = this;
    if (arguments.length === 0) {
        // 请补全代码，获取高亮的选项元素
        var items = null;
        // 请补全代码，获取高亮的选项元素的data-val
        var result = [];
        return result;
    }
    !that.isMultiple && values.length > 1 && (values.length = 1);
    var result = 0
    for (var i= 0; i < that.el.children.length; i++) {
        if (i.classList.contains('selected')) {
            result.push(i.textContent);
        }
    }
    return result;
}